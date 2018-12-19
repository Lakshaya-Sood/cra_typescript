import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _ from 'lodash';
import './modal_popup.css';

interface State {
    modalData : any
    open : boolean
}

type DataGridProps = { 
    modalData: any
    open : boolean
} 

function rand() {
    return Math.round(Math.random() * 20) - 10;
}
  
function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}



class SimpleModal extends React.Component<DataGridProps> {
    public state: State = {
        modalData:this.props.modalData,
        open:this.props.open
    }
    model:string=''
    constructor(props: any, context: any) {
        super(props, context);
    }

    handleClose = () => {
        this.setState({ open: false });
    };

    _renderObject(){
        return 
    }

    render() {
        const { modalData,open } = this.state;
        return(
            <div>
                <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={open}
          onClose={this.handleClose}
        >
        <div className="modalContent">
        <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <div className="">
            {Object.keys(modalData).map((val,k):any => {
                              return(<div>{modalData[val]}</div>)
                          })
                 }
            </div>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
        </div>
        </Modal>
            </div>
        )
    }
}

export default SimpleModal;