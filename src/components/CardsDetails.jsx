import { useNavigate, useParams } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DLT, ADD, REMOVE } from "../redux/actions/actions";

const CardsDetails = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const history = useNavigate();
  console.log(data);
  const { id } = useParams();
  // console.log(id);
  const getdata = useSelector((state) => state.cartreducer.carts);
  // console.log(getdata);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };
  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
    history("/");
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  useEffect(() => {
    compare();
  }, [id]);
  return (
    <div className="container mt-2">
      <h2 className="text-center">Items Details Page</h2>
      <section className="container mt-3">
        <div className="itemsdetails d-flex">
          {data.map((ele) => {
            return (
              <>
                <div className="items_img">
                  <img src={ele.imgdata} alt="dummy" />
                </div>
                <div className="details">
                  <Table>
                    <tr>
                      <td>
                        <p>
                          <strong>Resturant: {ele.rname}</strong>
                        </p>
                        <p>
                          <strong>Price:</strong>:Rs{ele.price}
                        </p>
                        <p>
                          <strong>Dishes</strong> : {ele.address}
                        </p>
                        <p>
                          <strong>Total</strong> :Rs. 300
                        </p>
                        <div
                          className="mt-5 d-flex justify-center align-items-center"
                          style={{
                            width: 100,
                            cursor: "pointer",
                            coloe: "#111",
                          }}
                        >
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => remove(ele)}
                          >
                            {" "}
                            -{" "}
                          </span>
                          <span style={{ fontSize: 24 }}> {ele.quantity}</span>
                          <span
                            style={{ fontSize: 24 }}
                            onClick={() => send(ele)}
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                      </td>
                      <td>
                        <p>
                          <strong>Rating: </strong>
                          <span
                            style={{
                              background: "green",
                              color: "#fff",
                              padding: "2px 5px",
                              borderRadius: "5px",
                            }}
                          >
                            {ele.rating}★
                          </span>
                        </p>
                        <p>
                          <strong>Order Review: </strong>
                          <span>{ele.somedata}</span>
                        </p>
                        <p onClick={dlt(ele.id)}>
                          <strong>Remove: </strong>
                          <span
                            className="fas fa-trash"
                            style={{
                              color: "red",
                              fontSize: 16,
                              cursor: "pointer",
                            }}
                          ></span>
                        </p>
                      </td>
                    </tr>
                  </Table>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default CardsDetails;