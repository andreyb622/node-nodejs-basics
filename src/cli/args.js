const parseArgs = () => {
    const args = process.argv.slice(2);
    const formattedArgs = args
        .filter((_, index) => index % 2 === 0)
        .map((key, index) => {
            const value = args[index * 2 + 1];
            const propName = key.replace(/^--/, '');
            return `${propName} is ${value}`;
        });
    formattedArgs.forEach(arg => console.log(arg));
};

parseArgs();

