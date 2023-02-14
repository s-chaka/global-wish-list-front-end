import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Homepage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import UnknownPage from "./pages/404";
import SignInPage from "./pages/SingInPage";
import Layout from "./components/Layout";
import DashboardPage from "./pages/DashboardPage";
import ProfilePage from "./pages/ProfilePage";
import { AuthProvider } from "./hooks/useAuth";
import { getItemFromLocalStorage } from "./Utils";
import HowItWorksPage from "./pages/HowItWorksPage";

// const URL = process.env.REACT_APP_BACKEND_URL;

const URL = "https://global-wish-list.herokuapp.com/users";
// const URL = "http://localhost:5000/users";

const MainLayout = () => {
  const [userData, setUserData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [currentUser, setCurrentUser] = useState(
    getItemFromLocalStorage("user")
  );

  //********Get all Users************//
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const newUsers = response.data.result.map((user) => {
          return {
            id: user._id,
            firstName: user.first_name,
            lastName: user.last_name,
            email: user.email,
            password: user.password,
            address: user.address,
          };
        });
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //******** Add User************//
  const addUser = (user) => {
    axios
      .post(URL, user)
      .then((response) => {
        console.log(response);
        const newUsers = [...userData];
        newUsers.push({
          id: response.data._id,
          firstName: user.first_name,
          lastName: user.last_name,
          email: user.email,
          password: user.password,
          address: {
            country: user.address.country,
            city: user.address.city,
            state: user.address.state,
            streetAddress: user.address.streetAddress,
            zipCode: user.address.zipCode,
          },
          ...user,
        });
        setUserData(newUsers);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //********Update User************//
  const updateUser = (id, formFields) => {
    const user = axios
      .put(`${URL}/${id}`, {
        first_name: formFields.firstName,
        last_name: formFields.lastName,
        email: formFields.email,
        password: formFields.password,
        address: {
          country: formFields.address.country,
          city: formFields.address.city,
          state: formFields.address.state,
          streetAddress: formFields.address.streetAddress,
          zipCode: formFields.address.zipCode,
        },
      })
      .then((response) => {
        console.log(response);
        setUserData(response.data);
      })
      .catch((error) => console.log(error));

    return user;
  };

  const navigate = useNavigate();
  //********Delete User************//
  const deleteUser = (id) => {
    const userResponse = window.confirm(
      "Are you sure you want to delete you'r account?"
    );
    if (userResponse) {
      axios
        .delete(`${URL}/${id}`)
        .then(() => {
          const newUsers = userData?.filter((user) => user?.id !== id);
          setUserData(newUsers);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/");
    }
  };

  //********Get Wishes************//
  useEffect(() => {
    axios
      .get(`${URL}/wishes`)
      .then((response) => {
        const newWishes = response.data.result.map((userWish) => {
          return {
            url: userWish.url,
            wishList: userWish.wish,
            story: userWish.story,
            owner: userWish.owner_id,
            id: userWish._id,
            interested: userWish.interested,
            satisfied: userWish.satisfied,
          };
        });
        setWishData(newWishes);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //********Add Wish************//
  const addWish = (wish, userId) => {
    axios
      .post(`${URL}/${userId}/wishlist`, wish)
      .then((response) => {
        const newWish = [...wishData];
        newWish.push({
          url: "",
          wishList: "",
          story: "",
        });
        setUserData(newWish);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //********Delete Wish************//
  const deleteWish = (wishId) => {
    const userResponse = window.confirm(
      "Are you sure you want to delete you'r wish?"
    );
    if (userResponse) {
      axios
        .delete(`${URL}/${wishId}/wishlist`)
        .then(() => {
          const newWishes = wishData.filter((wish) => wish.id !== wishId);
          setWishData(newWishes);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  //********Update Wish************//
  const updateWish = (wishId, wish) => {
    axios
      .put(`${URL}/${wishId}/wishlist`, {
        url: wish.url,
        wish: wish.wishList,
        story: wish.story,
        interested: wish.interested,
        satisfied: wish.satisfied,
      })
      .then(() => {
        const updateUserWish = (updatedWish) => {
          const updatedWishes = wishData.map((wish) => {
            if (wish.id === updatedWish.id) {
              return updatedWish;
            } else {
              return wish;
            }
          });
          setWishData(updatedWishes);
        };
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [searchResults, setSearchResults] = useState(null);
  const [foundUser, setFoundUser] = useState([]);
  const [foundUserWish, setFoundUserWish] = useState([]);

  const handleSearchResult = () => {
    const wishFound = [];
    const userFound = [];
    for (let wish of wishData) {
      for (let result of searchResults) {
        if (result.id === wish.owner) {
          wishFound.push(wish);
          if (!userFound.includes(result)) userFound.push(result);
          continue;
        }
        setFoundUserWish(wishFound);
        setFoundUser(userFound);
      }
      navigate("/profile");
    }
  };

  const makeWishReal = (wish_id) => {
    setWishData((interestes) => {
      return interestes.map((interest) => {
        if (interest.id === wish_id) {
          return {
            ...interest,
            interested: !interest.interested,
          };
        } else {
          return interest;
        }
      });
    });

    setFoundUserWish((interestes) => {
      return interestes.map((interest) => {
        if (interest.id === wish_id) {
          return {
            ...interest,
            interested: !interest.interested,
          };
        } else {
          return interest;
        }
      });
    });
  };

  const satisfyWish = (wish_id) => {
    setWishData((satisfies) => {
      return satisfies.map((satisfy) => {
        if (satisfy.id === wish_id) {
          return {
            ...satisfy,
            satisfied: !satisfy.satisfied,
          };
        } else {
          return satisfy;
        }
      });
    });

    setFoundUserWish((satisfies) => {
      return satisfies.map((satisfy) => {
        if (satisfy.id === wish_id) {
          return {
            ...satisfy,
            satisfied: !satisfy.satisfied,
          };
        } else {
          return satisfy;
        }
      });
    });
  };
  const pickYellowHeart = (interested) => {
    if (interested) {
      return "💛";
    } else {
      return "🤍";
    }
  };
  const pickGreenHeart = (satisfied) => {
    if (satisfied) {
      return "💚";
    } else {
      return "🤍";
    }
  };
  return (
    <AuthProvider setCurrentUser={setCurrentUser}>
      <Layout currentUser={currentUser}>
        <Outlet
          context={{
            addUser,
            addWish,
            userData,
            wishData,
            setCurrentUser,
            currentUser,
            deleteWish,
            deleteUser,
            setSearchResults,
            searchResults,
            handleSearchResult,
            foundUserWish,
            foundUser,
            updateWish,
            makeWishReal,
            pickYellowHeart,
            pickGreenHeart,
            satisfyWish,
            updateUser,
          }}
        />
      </Layout>
    </AuthProvider>
  );
};

export const routes = [
  {
    element: <MainLayout />,
    children: [
      {
        element: <Homepage />,
        path: "/",
      },
      {
        element: <HowItWorksPage />,
        path: "/howitworks",
      },
      {
        element: <SignUpPage />,
        path: "/signup",
      },
      {
        element: <SignInPage />,
        path: "/signin",
      },
      {
        element: <DashboardPage />,
        path: "/dashboard",
      },
      {
        element: <ProfilePage />,
        path: "/profile",
      },
    ],
  },
  {
    path: "/404",
    element: <UnknownPage />,
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
];
