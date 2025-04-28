import { readdir, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

const list = async () => {
    const folderPath = join('files');

    try {
        await access(folderPath, constants.F_OK);
        const files = await readdir(folderPath);
        console.log(files);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await list();