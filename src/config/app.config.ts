import 'dotenv/config';

interface AppSection {
  name: string;
  port: number;
  nodeEnv: string;
  emailApiBase: string;
}

interface DatabaseSection {
  url: string;
  key: string;
}

interface JwtSection {
  secret: string;
  expire: string;
}

interface CorsSection {
  origins: string[];
}

interface StorageSection {
  awsRegion: string;
  s3Bucket: string;
  accessKeyId: string;
  secretAccessKey: string;
  signedUrlTtlSeconds: number;
  signedUrlRefreshMarginSeconds: number;
}

const toNumber = (value: string | undefined, fallback: number): number => {
  const parsedValue = Number(value);

  return Number.isFinite(parsedValue) ? parsedValue : fallback;
};

class AppConfig {
  private static instance: AppConfig | undefined;

  app!: AppSection;
  database!: DatabaseSection;
  jwt!: JwtSection;
  cors!: CorsSection;
  storage!: StorageSection;

  constructor() {
    if (AppConfig.instance) {
      return AppConfig.instance;
    }

    this.app = {
      name: 'EduConnect Backend',
      port: toNumber(process.env.PORT, 8000),
      nodeEnv: process.env.NODE_ENV ?? 'development',
      emailApiBase: process.env.EMAIL_API_BASE_URL ?? 'http://localhost:8000/'
    };

    this.database = {
      url: process.env.SUPABASE_URL ?? '',
      key: process.env.SUPABASE_KEY ?? ''
    };

    this.jwt = {
      secret: process.env.JWT_SECRET ?? 'change-this-secret-in-production',
      expire: process.env.JWT_EXPIRE ?? '7d'
    };

    const defaultCorsOrigins = ['http://localhost:3000'];
    const envCorsOrigins = (process.env.CORS_ORIGIN ?? process.env.FRONTEND_URL ?? '')
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean);

    this.cors = {
      origins: envCorsOrigins.length > 0 ? envCorsOrigins : defaultCorsOrigins
    };

    this.storage = {
      awsRegion: process.env.AWS_REGION ?? 'us-east-1',
      s3Bucket: process.env.AWS_S3_BUCKET ?? '',
      accessKeyId: process.env.AWS_ACCESS_KEY_ID ?? '',
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? '',
      signedUrlTtlSeconds: toNumber(process.env.AWS_SIGNED_URL_TTL_SECONDS, 900),
      signedUrlRefreshMarginSeconds: toNumber(process.env.AWS_SIGNED_URL_REFRESH_MARGIN_SECONDS, 60)
    };

    this.validate();
    AppConfig.instance = this;
  }

  private validate(): void {
    if (this.app.nodeEnv === 'production' && !process.env.JWT_SECRET) {
      throw new Error('JWT_SECRET is required in production');
    }

    if (this.app.nodeEnv === 'production') {
      if (!this.database.url || !this.database.key) {
        throw new Error('SUPABASE_URL and SUPABASE_KEY are required in production');
      }

      if (!this.storage.s3Bucket) {
        throw new Error('AWS_S3_BUCKET is required in production');
      }

      if (!this.storage.accessKeyId || !this.storage.secretAccessKey) {
        throw new Error('AWS credentials are required in production');
      }
    }
  }
}

export default new AppConfig();
export type {
  AppConfig,
  AppSection,
  CorsSection,
  DatabaseSection,
  JwtSection,
  StorageSection
};
