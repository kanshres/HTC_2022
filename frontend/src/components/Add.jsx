import { useState, useEffect } from "react";
import {Box, Card, CardContent, Typography, CardActions, Button, CardMedia, Grid, TextField} from '@mui/material';
import "./Add.css";

const Add = ({handleItem, id, setErrorMessage}) => {
    const [form, setForm] = useState({
        title: "",
        description: "",
        value: "",
        category: "",
        owner: ""
    })

    const cleanFormData = () => {
      setForm({
        title: "",
        description: "",
        value: "",
        category: "",
        owner: ""
      })
    };

    const handleCreateItem = async (e) => {
      console.log(form)
      e.preventDefault();
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: form.title,
          description: form.description,
          value: form.value,
          email: form.email,
          note: form.note,
        }),
      };
      const response = await fetch("/api/items", requestOptions);
      console.log(response)
      if (!response.ok) {
        setErrorMessage("Something went wrong when creating item");
      } else {
        cleanFormData();
        handleItem();
      }
    };

    return(
    <div className="add"> 
      <Typography gutterBottom variant="h4" align="center" >
        Submit your article of clothing!     
    </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            
            <form>
              <Grid container spacing={1}>
                <Grid xs={12}  item>
                  <TextField placeholder="Clothing Item" style={{ fontSize: '18px' ,fontFamily: 'GFS Didot'}} label="Name of Clothing Item" variant="outlined" fullWidth required
                  onChange={(e) => {
                    setForm({...form, title: e.target.value});
                  }}
                  
                  
                   />
                </Grid>

                <Grid xs={12}  item>
                  <TextField placeholder="Description" multiline rows={4} style={{ fontSize: '18px' ,fontFamily: 'GFS Didot'}} label="Description" variant="outlined" fullWidth required
                  onChange={(e) => {
                    setForm({...form, description: e.target.value});
                  }}
                  
                  
                   />
                </Grid>
                <Grid item xs={12}>
                  <TextField  placeholder="Value" label="Approximate Retail Value" variant="outlined" fullWidth required 
                    onChange={(e) => {
                    setForm({...form, value: e.target.value});
                  }}


                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Category" placeholder="Category" variant="outlined" fullWidth required 
                    onChange={(e) => {
                    setForm({...form, category: e.target.value});
                    }}


                  />
                </Grid>
                {/* BELOW is a placeholder, owner should be currently logged in user */}
                <Grid item xs={12}>
                  <TextField  placeholder="Owner Username" label="Owner Username" variant="outlined" fullWidth required 

                    onChange={(e) => {
                    setForm({...form, owner: e.target.value});
                    }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography>Upload Image</Typography>
                </Grid>
                    <Grid item xs={6}>
                    <form method = "POST" action="/upload" enctype="mutlipart/form-data">
                        <input type="file" name="image"/>
                        <input type="submit"/>
                    </form>
                    
                    </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" onClick={handleCreateItem}  color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
}

export default Add;