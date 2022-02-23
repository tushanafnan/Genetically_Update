import React, { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from "@mui/material";
// import emailjs from "emailjs-com";
import Footer from "../Footer/Footer";
import database from "../firedb";
const BlogPost = () => {
        const [title, setTitle] = useState("");
        const [content, setContent] = useState("");
        const [date, setDate] = useState("");
        const [keyword, setKeyword] = useState("");
        
      
        const handleOnClick = () => {
          const setTodo = database.ref("Blog");
          const BlogData = {
            title: title,
            content: content,
            date: date,
            keyword: keyword,
          };
          setTodo.push(BlogData);
        };
      
        /* Note: if user fill the contact form his/her details will be stored in firebase data base. Collection name is Contact. */
        return (
          <div className="contact-main-container">
              <Container maxWidth="lg" className="contact-container">
                <Box
                  component="form"
                  maxWidth="md"
                  // onSubmit={sendEmail}
                  sx={{ margin: "55px auto 0 auto", padding: "0 15px" }}
                >
                  <Grid container spacing={{ xs: 0, md: 4 }} sx={{ width: "100%" }}>
                    <Grid item xs={12} md={6}>
                      <input
                        type="text"
                        required
                        id="title"
                        name="title"
                        placeholder="Your Blog Title"
                        className="common-input-field name-field"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <input
                        type="text"
                        required
                        id="content"
                        name="content"
                        placeholder="Your Blog Content"
                        className="common-input-field email-field "
                        onChange={(e) => setContent(e.target.value)}
                      />
                      <input
                        type="text"
                        id="date"
                        name="date"
                        placeholder="DD/MM/YY"
                        className="common-input-field phone-field "
                        onChange={(e) => setDate(e.target.value)}
                      />
                      <input
                        type="text"
                        id="keyword"
                        name="keyword"
                        placeholder="Your Blog Keywords"
                        className="common-input-field phone-field "
                        onChange={(e) => setKeyword(e.target.value)}
                      />
                    </Grid>

                      <Button
                        sx={{
                          display: "inline-block",
                          marginTop: "25px",
                          width: "180px",
                          background: "#08C5B6",
                        }}
                        type="submit"
                        variant="contained"
                        className="contact-submit-button"
                        onClick={handleOnClick}
                      >
                        POST
                      </Button>
                      </Grid>
                    </Box>
                    </Container>
            
            </div>
        );

};

export default BlogPost;