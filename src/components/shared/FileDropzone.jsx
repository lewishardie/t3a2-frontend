import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import { useDropzone } from 'react-dropzone'


const FileDropzone = ({ fieldChange, mediaUrl }) => {
    const [file, setFile] = useState([])
    const [fileUrl, setFileUrl] = useState('')
    


    const onDrop = useCallback((acceptedFiles) => {
        setFile(acceptedFiles);
        fieldChange(acceptedFiles);
        setFileUrl(URL.createObjectURL(acceptedFiles[0]))

    }, [file])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: {
            'image/*': ['.png', '.jpeg', '.jpg', '.svg']
        }
    })


  return (
    <div {...getRootProps()} className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer">
        <input {...getInputProps()} className="cursor-pointer"/>
        {
            fileUrl ? (
                <>
                <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
                    <img
                        src={fileUrl}
                        alt="uploaded"
                        className="file_uploader-img"
                    />
                </div>
                <p className="file_uploader-label">Click or drag photo to replace</p>
                </>

            ) : (
                <div className="file_uploader-box">
                    <img
                        src="../assets/icons/gamestart-logo.svg"
                        alt="file-upload"
                        width={96}
                        height={77}
                    />
                    <h3 className="base-medium text-light-2 mb-2 mt-6">
                        Drag image here
                    </h3>
                    <p className="text-light4 small-regular mb-6">
                        SVG, PNG, JPG
                    </p>
                </div>

            )
        }
    </div>
  )
}

FileDropzone.propTypes = {
    fieldChange: PropTypes.func.isRequired,
    mediaUrl: PropTypes.string.isRequired,
}

export default FileDropzone