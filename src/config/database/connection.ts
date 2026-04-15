import { createClient } from '@supabase/supabase-js';

import appConfig from '../app.config.js';

const supabase = createClient(appConfig.database.url, appConfig.database.key);

export default supabase;
