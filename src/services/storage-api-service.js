import fire from '../firebase';

export const uploadFiles = async (files) => {
        if(files){
            files.map(file => {
                const storageRef = fire.storage().ref(`slider_photos/${file.name}`)
                return storageRef.put(file)
            })
        }   
    }

export const deleteFile = async (file_name) => {
        const files = await fire.storage().ref(`slider_photos/`).listAll().then(res=>res.items)
        for(let file of files){
            if(file.name === file_name){
               await fire.storage().ref(`slider_photos/`).child(file.name).delete()
            }
        }
    } 
        
export const getFiles = async () => {
        const files = await fire.storage().ref(`slider_photos/`).listAll().then(res=>res.items)
        const fileUrls = []
        for(let file of files){ 
            const url = await fire.storage().ref(`slider_photos/`).child(file.name).getDownloadURL()
            const name = fire.storage().ref(`slider_photos/`).child(file.name).name     
            
            fileUrls.push({url,name}) 
        }

        return fileUrls
    }  
