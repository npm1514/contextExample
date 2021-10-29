import React, { Component } from 'react';
import { Button, LinearProgress } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import AddToPhotosOutlined from '@material-ui/icons/AddToPhotosOutlined';
import { CSVUploadDialogWrap, CSVUploadDialogBox, DashedBox, Exit, BrowseButton, Flex, Progress } from './styles/CSVUploadDialog';

import { GeneralContext } from '../context/GeneralContext';


class CSVUploadDialog extends Component {
  static contextType = GeneralContext;
  state = {
    requested: false,
    progress: 0,
    fileName: "",
    fileSize: 0
  }
  draganddrop = (event) => {
    event.stopPropagation();
    event.preventDefault();
    console.log("drag and drop csv")
    let dt = event.dataTransfer;
    let file = dt.files[0];
    if(file.type == "text/csv"){
      this.setState({
        requested : true,
        progress: 54,
        fileName: file.name,
        fileSize: file.size//50MB
      })
      this.csvRequest(file)
    } else {
      alert("Invalid file type! It must be a CSV!")
    }
  }
  csvfile = (event) => {
      console.log("csv upload")
      let file = event.target.files[0];
      this.setState({
        requested : true,
        progress: 54,
        fileName: file.name,
        fileSize: file.size//50MB
      })
      this.csvRequest(file)
  }
  csvRequest = (file) => {

      this.props.csvService(file)

  }
  fileSizer = (size) => {
    let sizes = ["B", "KB", "MB", "GB", "TB"];
    let denoms = [1, 1000, 1000000, 1000000000, 1000000000000];
    for(var i = 0; i < denoms.length; i++){
      let val = Math.round((size/denoms[i])*10)/10;
      if(val < 1000 && val > 1){
        return val + sizes[i];
      }
    }
  }
  render(){
    const { requested, progress, fileSize, fileName } = this.state;
    const { changeContext } = this.context;
    return (
        <CSVUploadDialogWrap>
          <CSVUploadDialogBox>
            <Exit onClick={() => changeContext("showCSV", false)}><Close/></Exit>
            <h2>CSV Upload</h2>
            <DashedBox
              onDragEnter={() => { event.stopPropagation(); event.preventDefault() }}
              onDragOver={() => { event.stopPropagation(); event.preventDefault() }}
              onDrop={ this.draganddrop }
            >
              <AddToPhotosOutlined color="#27AE60"/>
              <p>Drag and drop or {
                <form id="metaForm" style={{ display: 'inline' }}>
                  <input
                    style={{ display: 'none' }}
                    id="file-upload-input"
                    accept=".csv"
                    type="file"
                    name="fileUpload"
                    onChange={ this.csvfile }
                  />
                  <label htmlFor="file-upload-input">
                    <BrowseButton
                      id="file-upload-input-for"
                      title="Upload Assets"
                      component="span"
                      variant="outlined"
                      color={"primary"}
                    >browse</BrowseButton>
                  </label>
                </form>
              } your files.</p>
            </DashedBox>
            {
              requested ? (
                <Progress>
                  <p style={{textAlign: "left"}}>{fileName}</p>
                  <LinearProgress variant="determinate" value={progress} />
                  <Flex>
                    <p>{this.fileSizer(fileSize*progress/100)} of {this.fileSizer(fileSize)}</p>
                    <p>Uploading...{progress}%</p>
                  </Flex>
                  <Button variant="outlined" onClick={() => changeContext("showCSV", false)}>Done</Button>
                </Progress>
              ) : null
            }
          </CSVUploadDialogBox>
        </CSVUploadDialogWrap>
    );
  }
}

export default CSVUploadDialog;
