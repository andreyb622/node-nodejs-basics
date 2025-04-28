import fs from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

const rename = async () => {
    const folderPath = 'files';
    const wrongFile = join(folderPath, 'wrongFilename.txt');
    const newFile = join(folderPath, 'properFilename.md');

    try {
        await Promise.all([
            fs.access(wrongFile, constants.F_OK),
            fs.access(newFile, constants.F_OK).then(() => {
                throw new Error('FS operation failed');
            }).catch(err => {
                if (err.code !== 'ENOENT') {
                    throw new Error('FS operation failed');
                }
            })
        ]);
        await fs.rename(wrongFile, newFile);

    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await rename();