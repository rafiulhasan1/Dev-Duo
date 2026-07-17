import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SessionTimeout = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const timerRef = useRef(null);

  // Test করার জন্য 30 seconds
  // Production এ 15 * 60 * 1000 ব্যবহার করবে
  const TIMEOUT = 15 * 60 * 1000;

  const resetTimer = () => {
    if (!user) return;

    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      await logout();
      alert("Session expired due to inactivity.");
      navigate("/login", { replace: true });
    }, TIMEOUT);
  };

  useEffect(() => {
    if (!user) return;

    const events = [
      "mousemove",
      "mousedown",
      "keypress",
      "scroll",
      "touchstart",
    ];

    events.forEach((event) =>
      window.addEventListener(event, resetTimer)
    );

    resetTimer();

    return () => {
      clearTimeout(timerRef.current);

      events.forEach((event) =>
        window.removeEventListener(event, resetTimer)
      );
    };
  }, [user]);

  return null;
};

export default SessionTimeout;