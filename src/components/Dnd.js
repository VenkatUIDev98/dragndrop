import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 'auto',
  height: 'auto',
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 300,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};


function Dnd(props) {
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });
  
  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          // Revoke data uri after image is loaded
          onLoad={() => { URL.revokeObjectURL(file.preview) }}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach(file => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <section className="container" style={{ display:"flex", justifyContent:"center"}}>
      <div {...getRootProps({className: 'dropzone'})} style={{height:"200px", width:"400px", border:"1px dashed lightgray", display:"flex",flexDirection: "column" , justifyContent:"center", alignItems:"center", cursor:"pointer"}}>
        <input {...getInputProps()} />
        <h4>Drag and Drop</h4>
        <p>( or )</p>
        <button style={{backgroundColor: "lightgray", border:"none", padding: "10px", color: "darkgray", fontWeight: "bold", cursor:"pointer"}}>Select files to upload</button>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}
export default Dnd