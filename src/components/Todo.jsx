import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Div } from "./ReusableStyles";

const Todo = () => {
  const [items, setItems] = useState([]);

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setItems(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      if (response.status === 200) {
        getdata();
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (id, title, completed, userId) => {
    try {
      const response = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          userId: userId,
          id: id,
          title: title,
          completed: completed,
        }
      );
      console.log(response);
      if (response.status === 200) {
        getdata();
        window.location.reload(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <Div task_con>
        {items.slice(0, 50).map((item) => {
          return (
            <Div con>
              <p>{item.id}.</p>
              <Div cards>
                <p>{item.title}</p>
                <hr />
                <Div complete>
                  <Button
                    marked
                    onClick={() => {
                      updateTodo(
                        item.id,
                        item.title,
                        item.completed,
                        item.userId
                      );
                    }}
                  >
                    Marked as completed
                  </Button>
                  <Button
                    delete
                    onClick={() => {
                      deleteTodo(item.id);
                    }}
                  >
                    Delete
                  </Button>
                </Div>
              </Div>
            </Div>
          );
        })}
      </Div>
    </>
  );
};

export default Todo;
