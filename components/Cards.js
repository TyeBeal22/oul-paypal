import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';




const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: "1rem"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            OL
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">

          </IconButton>
        }
        title="Veggie Burger with Sweet potato fries "
        subheader="April 14, 2020"
      />
      <CardMedia
        className={classes.media}
        height= "2rem"
        image={require ("./Img/vegBurg.jpg")}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Ground beans in a bowl into smooth texture, Sautée veggies for 3-5 minutes, add sautéed veggies to smashed beans, add flour, egg and mix. Add herbs/seasoning of choice and make into burgers.
          Cook on each side 4-6 minutes and enjoy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>


        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography paragraph>
          1 can of Chic peas, black beans
          1/2 cup of chopped mushrooms
          1 purple onion
          1 chopped broccoli head
          2 cloves of garlic
          3/4 ginger
          1/2c of flour
          1 egg
          Rosemary, thyme sea salt, pepper,
          2 swt potato’s
          1 tbspn of cinnamon
          1 tbspn of brown coconut sugar
          1 tbspn of pepper
          </Typography>
          <Typography paragraph>
Cut potatoes, add oil and seasoning - you can bake for 15 on each side at 400 or fry in none animal oil.
          </Typography>


        </CardContent>
      </Collapse>
    </Card>
  );
}
