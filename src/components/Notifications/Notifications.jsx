import { useState } from "react";
import { NotificationsDropdown } from "./NotificationsDropdown";

export const Notifications = () => {
  const [hasNotifications, setHasNotifications] = useState(false);

  // true lub false = boolean

  const toggleHasNotifications = () =>
    setHasNotifications((prevHasNoti) => !prevHasNoti);

  const handleClose = () => {
    // console.log(event);
    // event.preventDefault();
    setHasNotifications(false);
  };

  const notiClass = `${hasNotifications ? "show" : ""}`;

  return (
    <>
      <span
        className={`p-2 cursor-pointer text-center ms-auto menu-icon ${notiClass}`}
        id="dropdownMenu3"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={toggleHasNotifications}
      >
        <span className="dot-count bg-warning"></span>
        <i className="feather-bell font-xl text-current"></i>
      </span>
      {/* {hasNotifications === true && <NotificationsDropdown />} */}
      {hasNotifications && <NotificationsDropdown onClose={handleClose} />}
    </>
  );
};
