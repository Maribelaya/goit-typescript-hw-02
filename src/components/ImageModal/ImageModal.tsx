import { FC } from "react";
import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface Props {
  modalIsOpen: boolean;
  closeModal: () => void;
  selectedImage: string; // URL
}

const ImageModal: FC<Props> = ({ modalIsOpen, closeModal, selectedImage }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img className={css.img} src={selectedImage} alt="Selected image" />
    </Modal>
  );
};

export default ImageModal;
