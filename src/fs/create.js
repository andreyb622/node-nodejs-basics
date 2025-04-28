import { writeFile, access } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join('files', 'fresh.txt');
    try {
        await access(filePath, constants.F_OK);
        throw new Error('FS operation failed');
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
        } else {
            throw new Error('FS operation failed');
        }
    }
};

await create();