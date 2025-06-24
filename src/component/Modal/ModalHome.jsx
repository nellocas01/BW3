import { Button, Modal } from "react-bootstrap";
import avatar from "../../assets/img/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import {
  ChatText,
  Clock,
  EmojiSmile,
  FileEarmarkText,
  GlobeAmericas,
  Image,
  PlayBtnFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { mockUser } from "../../mockData";
import { useAppContext } from "../../context/AppContext";
import { addPost } from "../../redux/actions";
import { useState } from "react";

const ModalHome = ({ show, handleCloseHome }) => {
  const dispatch = useDispatch();
  const { setIsLoading, setError } = useAppContext();
  const [postText, setPostText] = useState("");
  const user = useSelector((state) =>
    Array.isArray(state.user.content) && state.user.content.length > 0
      ? state.user.content
      : mockUser
  );

  const handleAdd = (e) => {
    e.preventDefault();
    if (postText.trim()) {
      dispatch(addPost(postText, setIsLoading, setError));
      handleCloseHome();
    }
  };

  return (
    <>
      <Modal show={show} onHide={handleCloseHome}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1>Crea un post</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex">
            <img src={avatar} alt="" width={50} className="rounded-pill" />
            <h3 className="me-auto">
              {user.name} {user.surname}
            </h3>
            <div className="ms-auto">
              <Button variant="white border-dark" className="ms-auto">
                <GlobeAmericas className="mx-2" />
                <span>Chiunque</span>
              </Button>
            </div>
          </div>
          <div className="form-floating my-3">
            <input
              type="text"
              className="form-control p-0 border-white"
              id="floatingInput"
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />

            <label className="p-0">Di cosa vorresti parlare?</label>
          </div>
          <Button variant="white">
            <EmojiSmile />
          </Button>
          <div>
            <Button variant="light" className="p-0">
              <Image className="text-secondary mx-2" />
            </Button>
            <Button variant="light" className="p-0">
              <PlayBtnFill className="text-secondary mx-2" />
            </Button>
            <Button variant="light" className="p-0">
              <FileEarmarkText className="text-secondary mx-2" />
            </Button>
            <Button variant="light" className="p-0">
              <ThreeDots className="text-secondary mx-2" />
            </Button>
            <span className="text-secondary">|</span>
            <Button variant="light" className="p-0 me-5">
              <ChatText className="text-secondary mx-2" />
              <span className="text-secondary">Tutti</span>
            </Button>
            <Button variant="light" className="p-0 ms-5">
              <Clock className="text-secondary ms-auto" />
            </Button>
            <Button variant="secondary" className="mx-1" onClick={handleAdd}>
              Pubblica
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalHome;
