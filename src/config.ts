// Used for the APM agent
export const secretToken: string = process.env.APM_SECRET_TOKEN || '';
export const serviceName: string = process.env.US_APM_SERVICE_NAME || 'user-service';
export const verifyServerCert: boolean = process.env.ELASTIC_APM_VERIFY_SERVER_CERT === 'true';
export const apmURL: string = process.env.ELASTIC_APM_SERVER_URL || 'http://localhost:8200';
export const userQuotaLimit: string = process.env.USER_QUOTA_LIMIT || '10';
export const spikeReqBody: object = {
    grant_type: process.env.GRANT_TYPE || 'client_credentials',
    audience: process.env.AUDIENCE || 'kartoffel',
};
export const spikeServiceURL: string = process.env.SPIKE_SERVICE_URL || 'spike-service:8080';

export const debugMode: boolean = process.env.DEBUG_MODE === 'true';

const esHost: string = process.env.ELASTICSEARCH_URL || 'http://localhost:9200';
const esUser: string = process.env.ELASTICSEARCH_USER || '';
const esPass: string = process.env.ELASTICSEARCH_PASSWORD || '';
export const confLogger = {
    options: {
        hosts: esHost && esHost.split(','),
        // Might be auth instead, not sure.
        httpAuth: `${esUser}:${esPass}`,
    },
    indexPrefix: process.env.LOG_INDEX || 'kdrive',
};
