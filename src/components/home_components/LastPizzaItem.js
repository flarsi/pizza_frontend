import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {baseUrl} from "../../common/ApiHeplper";
import CardActionArea from "@material-ui/core/CardActionArea";
import Modal from "@material-ui/core/Modal";
import {ModalPizza} from "./ModalPizza";

export const LastPizzaItem = ({props}) => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    component="img"
                    heigh="150"
                    image={baseUrl+'img/'+props.image}
                    onClick={handleOpen}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalPizza image={baseUrl+'img/'+props.image} props={props} handleClose={handleClose}/>
            </Modal>
        </Card>
    );
}