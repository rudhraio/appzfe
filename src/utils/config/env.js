import dev from "./dev";

const environments = {
    development: dev
}
const currentenv = process.env.NODE_ENV || 'dev';
const env = environments[currentenv];

export default env;