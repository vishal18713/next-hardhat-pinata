// pinataService.js
import pinataSDK from '@pinata/sdk';

const pinata = pinataSDK('44b504b084dcd3130539', '3368cd221c559047242967e9c9d96da4629beedb0d45aa7e746a5a46b5c4101e');

export const uploadFileToIPFS = async (file) => {
    try {
        const result = await pinata.pinFileToIPFS(file);
        return result;
    } catch (error) {
        console.error('Error uploading file to IPFS:', error);
        throw error;
    }
}

export const getFileFromIPFS = async (hash) => {
    try {
        const result = await pinata.pinFromIPFS(hash);
        return result;
    } catch (error) {
        console.error('Error retrieving file from IPFS:', error);
        throw error;
    }
}
