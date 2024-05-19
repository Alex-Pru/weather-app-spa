/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const nextConfig = {
    output: "standalone",
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      env:{
        APIURLCURRENT: 'http://api.weatherapi.com/v1/current.json?key=<yourtokenhere>&q=',
        APIURLFORECAST: 'http://api.weatherapi.com/v1/forecast.json?key=<yourtokenhere>&q='
      }
};

export default nextConfig;
