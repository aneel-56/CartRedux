import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import "./styles.css";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { NavLink } from "react-router-dom";
import { Menu } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { DLT } from "../redux/actions/actions";

const Headers = () => {
  const [price, setPrice] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const total = () => {
    let price = 0;
    getdata.map((ele) => {
      price = ele.price + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink href="/" className="text-decoration-none text-light">
              Home
            </NavLink>
          </Nav>
          <Badge
            badgeContent={getdata.length}
            color="primary"
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <ShoppingCartCheckoutIcon
              className="text-light"
              style={{ cursor: "pointer", fontSize: 25 }}
            />
          </Badge>
        </Container>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{ "aria-labelledby": "basic-button" }}
        >
          {getdata.length ? (
            <div
              className="card_details"
              style={{ width: "24rem", padding: 10 }}
            >
              <Table>
                <thead>
                  <tr>
                    <th>Photos</th>
                    <th>Resturant Name</th>
                  </tr>
                </thead>
                <tbody>
                  {getdata.map((e) => {
                    return (
                      <>
                        <tr>
                          <td>
                            <NavLink to={`/cart/${e.id}`} onClick={handleClose}>
                              <img
                                src={e.imgdata}
                                style={{ width: "5rem", height: "5rem" }}
                                alt="smallPop"
                              />
                            </NavLink>
                          </td>
                          <td>
                            <p>{e.rname}</p>
                            <p>Price : Rs {e.price}</p>
                            <p>Quantity: {e.qnty}</p>
                            <p
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash smalltrash"></i>
                            </p>
                          </td>
                          <td>
                            <i
                              onClick={() => dlt(e.id)}
                              className="fas fa-trash  largetrash"
                              style={{
                                color: "red",
                                fontSize: 20,
                                cursor: "pointer",
                              }}
                            ></i>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                  <p className="text-center">Total: {price}</p>
                </tbody>
              </Table>
            </div>
          ) : (
            <div className="card_details d-flex justify-content-center align-items-center">
              <i
                className="fas fa-close smallclose"
                onClick={handleClose}
                style={{
                  position: "absolute",
                  top: 2,
                  right: 20,
                  fontSize: 23,
                  cursor: "pointer",
                }}
              ></i>
              <p style={{ fontSize: 22 }}>Your Cart is Empty</p>
              {/* <img></img> */}
            </div>
          )}

          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My Account</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </Navbar>
    </>
  );
};

export default Headers;
