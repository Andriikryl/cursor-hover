import React from "react";
import styles from "./style.module.css";
import Hovered from "../hovered/Hovered";
export default function ComponentThree() {
  return (
    <div className={styles.box}>
      <Hovered>
        <h3>Component Three</h3>
      </Hovered>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sint
        sunt libero ut dolore quod non repellat ab rerum laboriosam, est quam
        quae numquam, cupiditate perferendis maxime cum accusamus ipsam?
      </p>
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, dolorem
        molestiae facilis commodi aperiam voluptate praesentium. Harum rem ab
        animi asperiores. Quasi sequi ab molestias quae doloribus possimus sunt
        ut!
      </p>
      <Hovered>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          earum impedit ducimus fugiat totam consequatur debitis asperiores ex
          quam minima quasi, quia porro praesentium exercitationem, nihil
          expedita recusandae et deserunt.
        </p>
      </Hovered>
      <hr />
    </div>
  );
}
