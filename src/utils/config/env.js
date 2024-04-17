import dev from "./dev";
import prod from "./prod";

const environments = {
    development: dev,
    production: prod
};

const currentenv = process.env.NODE_ENV || 'dev';
const env = environments[currentenv];

export default env;