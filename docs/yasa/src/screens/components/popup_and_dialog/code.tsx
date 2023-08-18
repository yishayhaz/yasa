import React from "react";
import { Dialog, Popup } from "@yasa/popup";
import { Button, IconButton } from "@yasa/button";
import { IoMdTrash } from "react-icons/io";
import { HiInformationCircle } from "react-icons/hi";

// @end imports@ //

export function PopupAndDialogScreen() {
  const [showPopup, setShowPopup] = React.useState(false);
  const [showDialog, setShowDialog] = React.useState(false);

  return (
    <>
      {showDialog && (
        <Dialog
          show={showDialog}
          icon={<IoMdTrash />}
          onHide={() => setShowDialog(false)}
          text="Are you sure you want to delete this item?"
          onConfirm={() => {
            alert("Deleted");
          }}
        />
      )}
      {showPopup && (
        <Popup
          show={showPopup}
          onHide={() => setShowPopup(false)}
          cardClassName="p-50"
        >
          <h1 className="d-flex justify-content-start gap-10">
            <HiInformationCircle size={30} /> Popup
          </h1>
          <p>
            Popups are kinda cool, but to be honest they are not perfect, lack
            accesiablity
            <br />
            and maybe a proper z-index management
          </p>
        </Popup>
      )}
      <article>
        <h1>Popup and Dialog</h1>
        <div className="d-flex gap-10 justify-content-start">
          <Button
            className="gap-10"
            autoWidth
            onClick={() => setShowPopup(true)}
          >
            <HiInformationCircle /> More information
          </Button>
          <IconButton
            label="delete"
            variant="danger"
            onClick={() => setShowDialog(true)}
          >
            <IoMdTrash />
          </IconButton>
        </div>
      </article>
    </>
  );
}
