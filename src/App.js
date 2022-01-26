import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page1 />}></Route>
        <Route path="/page1" element={<Page1 />}></Route>
        <Route path="/page2" element={<Page2 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

function Page1() {
  return (
    <div>
      <h1>page no 1</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        inventore esse architecto ducimus eum nam quo. Reprehenderit quam,
        maiores culpa doloribus necessitatibus, assumenda, quasi numquam
        deleniti officiis sed repellat accusantium consequuntur fuga eos odio
        minus nihil saepe distinctio cupiditate modi at dignissimos reiciendis!
        Quas, iste. At nisi, laudantium maiores corporis animi beatae fuga
        voluptas maxime. Velit rerum ducimus vitae iusto repellat earum odit ex
        ullam, fugiat alias soluta expedita, amet ea deleniti. Reprehenderit
        molestias ab adipisci placeat dignissimos praesentium sapiente doloribus
        fugit dolore, laboriosam, autem expedita obcaecati asperiores impedit
        sequi nobis accusantium. Delectus reprehenderit omnis aut vitae harum,
        officia commodi.
      </p>

      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia
        temporibus vero animi, corrupti libero labore sit dolore expedita
        voluptatibus dolorum molestias, recusandae ea enim laboriosam ex qui sed
        natus porro quasi. Ipsam facilis qui iste nemo dolor laborum odit, hic
        dicta aut, nisi nihil, nam recusandae necessitatibus inventore iure.
        Sapiente quis exercitationem eveniet quisquam possimus error nam libero
        voluptate, ipsa provident ea odit saepe sit repellat accusamus quaerat
        eos dolores at velit. Non neque nihil ea ducimus distinctio quibusdam
        eum suscipit! Dolore incidunt molestias illum reprehenderit. Rem ipsum
        eum vel facere repellat ducimus inventore, quia illum eligendi
        doloribus, expedita eaque.
      </p>
    </div>
  );
}

function Page2() {
  return (
    <div>
      <h1>page no 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi magnam
        reprehenderit sed distinctio at ipsam accusamus! Repudiandae pariatur
        deleniti odit placeat, neque, optio et obcaecati dolores aut accusamus a
        atque. Pariatur quibusdam a obcaecati similique laudantium voluptate
        sapiente earum minima, sunt repellendus nam incidunt praesentium facere
        fugit labore totam quam. Eaque dolor similique, debitis laudantium
        commodi illo inventore iure quae? Voluptatem ipsam alias iste ea cumque
        molestias, in corrupti culpa cupiditate placeat animi aperiam? Voluptas
        excepturi suscipit sunt repudiandae asperiores, incidunt ipsam optio ab
        aspernatur quidem. Consequuntur quaerat blanditiis eos, voluptatum
        ratione hic impedit libero! Quia omnis recusandae dicta nobis.
      </p>
    </div>
  );
}
