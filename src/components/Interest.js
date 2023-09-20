import { toast } from "react-toastify";
import { useAuth } from "../hooks";
import styled from "../styles/navbar.module.css";
const interests = ["sports", "health", "technology", "politics"];

export default function Interest() {
  const auth = useAuth();

  const handleUpdateInterest = async (interest) => {
    const response = await auth.updateInterest(interest);

    if (response.success) {
      // notification success
      toast.success("Interest Updated success full");
    } else {
      // notification error
      toast.error(response.message);
    }
  };
  return (
    <>
      <div className={styled.InterestWrapper}>
        <strong>Select one interest to update and shows in Home page </strong>
        <ul className={styled.IntemContainer}>
          {interests.map((interest) => (
            <li className={styled.Item}>
              <span onClick={() => handleUpdateInterest(interest)}>
                {" "}
                {interest}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
