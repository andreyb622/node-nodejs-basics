import { access, cp } from 'fs/promises';
import { constants } from 'fs';
import { join } from 'path';

const copy = async () => {
    const initialFolder = join('files');
    const folderCopy = join('files_copy');

    try {
        await access(initialFolder, constants.F_OK);

        try {
            await access(folderCopy, constants.F_OK);
            throw new Error('FS operation failed');
        } catch (error) {
            if (error.code !== 'ENOENT') {
                throw new Error('FS operation failed');
            }
        }

        await cp(initialFolder, folderCopy, { recursive: true });
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await copy();
