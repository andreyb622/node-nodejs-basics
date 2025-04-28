const parseEnv = () => {
    const envVariables = process.env;

    const rssEnvVariables = Object.entries(envVariables)
        .filter(([key]) => key.startsWith('RSS_'))
        .map(([key, value]) => `${key}=${value}`);

    console.log(rssEnvVariables.join('; '));
};

parseEnv();

// during testing add env variables before "node env.js", for example  export RSS_example=example