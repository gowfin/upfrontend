import React,{useState} from 'react'
function App(){
    const [loading,setLoading]=useState(false)
    const [image,setImage]=useState("")



    const uploadImage= async e => {
const files =e.target.files

const data=new FormData()
data.append('file',files[0])
data.append('public_id','xxxx')
data.append('upload_preset','profiles')
console.log(data.values) 
// data.append('public_id','emma@yahoo.com')
 setLoading(true)
 const res=await fetch("https://api.cloudinary.com/v1_1/helping-hands-for-active-people/image/upload",
 {
     method:'POST',
     body:data
 })
 const file=await res.json()
//  try{console.log(image)}
//  catch(error)
// {
//     console.log(image)   
// } 
 setImage(file.secure_url)
 setLoading(false)
    }
    return(
        <div className='App'>
            <h1>upload image</h1>
            <div><input name="file" type="file"  placeholder='upload an image'onChange={uploadImage}
   className="file-upload" data-cloudinary-field="image_id"
   data-form-data="{ 'transformation': {'crop':'limit','tags':'Add Image','width':3000,'height':2000}}"/>
</div>
            {/* <input type='file'name='file'placeholder='upload an image'onChange={uploadImage} /> */}
            {
                 //console.log(image),
              loading?(
                  <h3> Loading ...</h3>   
              ):(
                  <img src={image} alt="" style={{width:'300px'}}/>
                 
              )  
            }
        </div>
    )
}
export default App