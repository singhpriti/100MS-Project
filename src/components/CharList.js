import React, { useMemo, useState } from 'react'
import './CharList.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            width: "100%",
            alignItems: "center",
            height: "fit-content",
            margin: theme.spacing(2),
        },
    },
}));

const CharList = () => {

    const [char, setChar] = useState([])

    const [quote, setQuote] = useState([])

    const getList = async () => {
        await fetch("https://www.breakingbadapi.com/api/characters").then(res => res.json()).then(data => { setChar(data); console.log(data) })

        await fetch("https://www.breakingbadapi.com/api/quotes/").then(name => name.json()).then(data => { setQuote(data); console.log(data) })
    }

    let quoteList = [];

    char.map(item => {

        const quotes = quote.filter(quoteItem => item.name === quoteItem.author)
        quoteList = [...quoteList, quotes];
        console.log(quoteList)
    })

    useMemo(() => {
        getList();

    }, [])


    const classes = useStyles()
    return (

        <div>
            <h2 className="Top__Title">Top Cast</h2>
            {char && char.map((item, index) => {


                return (

                    <div className={classes.root}>

                        <Paper className="Ui_Card" elevation={3} >
                            <div className="Img" >
                                <img src={item.img} alt="avt" />
                            </div>

                            <div className="content">


                                <Typography variant="h5" color="textPrimary"><b>Name</b>{`:  ${item.name}`}</Typography>
                                <Typography variant="h5" color="textPrimary"><b>Date of Birth</b> {`:  ${item.birthday}`}</Typography>
                                <Typography variant="h5" color="textPrimary"><b>Occupation</b>{`:  ${item.occupation}`}</Typography>
                                <Typography variant="h5" color="textPrimary"><b>Status</b>{`:  ${item.status}`}</Typography>
                                <Typography variant="h5" color="textPrimary"><b>Nickname</b>{`:  ${item.nickname}`}</Typography>
                                <Typography variant="h5" color="textPrimary"><b>Real Name</b>{`:  ${item.portrayed}`}</Typography>
                                <Typography variant="h5" color="textPrimary"><b>Seasons Of appearance</b>{`:  ${item.appearance}`}</Typography>
                                <Typography variant="h5" color="textSecondary"> {`Quotes:  ${quoteList[index].length > 0 ? quoteList[index].map((item) => `   =>  ${item.quote}  
                                                                                                                                                                               `) : "none"}`}</Typography>



                            </div>
                        </Paper>
                    </div>

                )
            })

            }


        </div>
    )
}

export default CharList

