import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { join } from 'path';


const calculateHash = async () => {
    const filePath = join('files', 'fileToCalculateHashFor.txt');
    try {
        const fileBuffer = await readFile(filePath);
        const hash = createHash('sha256').update(fileBuffer).digest('hex');
        console.log(hash);
    } catch (err) {
        console.error('FS operation failed', err);
    }
};

await calculateHash();