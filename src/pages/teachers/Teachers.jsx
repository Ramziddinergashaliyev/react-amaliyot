import React, { useEffect, useState } from "react";
import "./teacher.scss";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

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
  const [loading, setLoading] = useState(false);
  const [edit, setEdit] = useState(null);
  let limit = 6;

  function getTeacher() {
    axios
      .get(
        `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers?limit=${limit}&page=${pages}`
      )
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
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
    if (confirm("Ochirilsinmi")) {
      axios
        .delete(
          `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers/${id}`
        )
        .then((res) => {
          console.log(res);
          getTeacher();
          toast.success("malumot Ochirildi");
        })
        .catch((err) => console.log(err));
    }
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
        <button onClick={() => hundleEdit(e)}>Edit</button>
        <button onClick={() => hundleDelete(e.id)}>Delete</button>
      </div>
    </div>
  ));

  const hundleEdit = (e) => {
    setShowModal(true);
    setEdit(e.id);
    setnewProduct(e);
  };

  const hudleCreate = (e) => {
    e.preventDefault();
    if (edit) {
      axios
        .put(
          `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers/${edit}`,
          newProduct
        )
        .then((res) => {
          getTeacher();
          setShowModal(false);
          setnewProduct(initionalition);
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post(
          `https://6645a4ffb8925626f8928352.mockapi.io/schools/Teachers`,
          newProduct
        )
        .then((res) => {
          getTeacher();
          setShowModal(false);
          console.log(res);
          toast.success("Malumot yaratildi");
          setnewProduct(initionalition);
        })
        .catch((err) => console.log(err));
    }
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
          <form onSubmit={hudleCreate} className="teacher__form" action="">
            <div
              onClick={() => setShowModal(false)}
              className="teacher__body__close"
            >
              X
            </div>
            <h1>Products</h1>
            <input
              required
              value={newProduct.avatar}
              placeholder="img"
              onChange={(e) =>
                setnewProduct((prev) => ({ ...prev, avatar: e.target.value }))
              }
              type="url"
            />
            <input
              required
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
              required
              value={newProduct.lastName}
              placeholder="lastname"
              onChange={(e) =>
                setnewProduct((prev) => ({ ...prev, lastName: e.target.value }))
              }
              type="text"
            />
            <input
              required
              value={newProduct.email}
              placeholder="email"
              onChange={(e) =>
                setnewProduct((prev) => ({ ...prev, email: e.target.value }))
              }
              type="email"
            />
            <input
              required
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
            <button disabled={loading}>{loading ? "Save" : "Create"}</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Teachers;
