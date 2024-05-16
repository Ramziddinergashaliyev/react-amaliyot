import React, { useEffect, useState } from "react";
import "./teacher.scss";
import axios, { Axios } from "axios";

let initionalition = {
  avatar: "",
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

function Teachers() {
  const [product, setProduct] = useState(null);
  const [pagenationCount, setPagenationCount] = useState(0);
  const [pages, setPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [newProduct, setnewProduct] = useState(initionalition);
  let limit = 6;

  function getTeacher() {
    axios
      .get(
        `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers?limit=${limit}&page=${pages}`
      )
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }

  function teacherPagenation() {
    axios
      .get("https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers")
      .then((res) => setPagenationCount(res.data?.length));
  }

  function getPaganetion() {
    let res = [];
    for (let i = 0; i < pagenationCount / 6; i++) {
      res.push(
        <button key={i} onClick={() => setPages(i + 1)}>
          {i + 1}
        </button>
      );
    }
    return res;
  }

  const hundleDelete = (id) => {
    axios
      .delete(
        `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers/${id}`
      )
      .then((res) => {
        console.log(res);
        getTeacher();
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    {
      getTeacher();
    }
  }, [pages]);

  useEffect(() => {
    teacherPagenation();
    getTeacher();
  }, []);

  let teacherData = product?.map((e) => (
    <div className="teacher__card">
      <div className="teacher__card__img">
        <img src={e.avatar} alt="" />
      </div>
      <div className="teacher__card__info">
        <h3 className="teacher__card__title">
          {e.lastName}
          {e.firstName}
        </h3>
        <p className="teacher__card__desc">email: {e.email}</p>
        <p className="teacher__card__desc">phoneNumber: {e.phoneNumber}</p>
      </div>
      <div className="teacher__card__btns">
        <button>Edit</button>
        <button onClick={() => hundleDelete(e.id)}>Delete</button>
      </div>
    </div>
  ));

  const hudleCreate = (e) => {
    e.preventDefault();
    axios
      .post(
        `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers`,
        newProduct
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="teacher">
      <div className="container">
        <div className="teacher__body">
          <div className="teacher__body__logo">Logo</div>
          <div className="teacher__body__btns">
            <select name="" id="">
              <option value="All">All</option>
              <option value="Merried">Merried</option>
              <option value="Single">Single</option>
            </select>
            <select name="" id="">
              <option value="Order">Order</option>
              <option value="Alphabitic">Merried</option>
              <option value="Revorse">Revorse</option>
            </select>
            <button
              onClick={() => setShowModal(true)}
              className="teacher__body__btn"
            >
              Add teachers
            </button>
          </div>
        </div>
        <div className="teacher__cards">{teacherData}</div>
        <div className="teacher__peganetion">
          <button disabled={pages === 1} onClick={() => setPages(pages - 1)}>
            Prev
          </button>
          {getPaganetion()}
          <button
            disabled={
              pages === Math.ceil(pagenationCount / limit) ? true : false
            }
            onClick={() => setPages(pages + 1)}
          >
            Next
          </button>
        </div>
        <div
          className={`teacher__module ${
            showModal ? "teacher__show__module" : ""
          }`}
        >
          <form className="teacher__form" action="">
            <div
              onClick={() => setShowModal(false)}
              className="teacher__body__close"
            >
              X
            </div>
            <h1>Products</h1>
            <input
              value={newProduct.avatar}
              placeholder="img"
              onChange={(e) =>
                setnewProduct((prev) => ({ ...prev, avatar: e.target.value }))
              }
              type="url"
            />
            <input
              value={newProduct.firstName}
              placeholder="firstname"
              onChange={(e) =>
                setnewProduct((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
              type="text"
            />
            <input
              value={newProduct.lastName}
              placeholder="lastname"
              onChange={(e) =>
                setnewProduct((prev) => ({ ...prev, lastName: e.target.value }))
              }
              type="text"
            />
            <input
              value={newProduct.email}
              placeholder="email"
              onChange={(e) =>
                setnewProduct((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
            />
            <input
              value={newProduct.phoneNumber}
              placeholder="phoneNumber"
              onChange={(e) =>
                setnewProduct((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
              type="number"
            />
            <button onClick={hudleCreate}>Create</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
