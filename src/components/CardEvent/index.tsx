import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import EventModal from '../Modals/EventModal';

interface MediaCardProps {
  eventName: string;
}

export default function MediaCard(props: MediaCardProps) {
  const { eventName } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {eventName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nihil dignissimos
          cumque pariatur animi dicta officia. Autem fugit culpa facilis repudiandae repellat
          consequuntur iusto corrupti dignissimos. Commodi impedit ad nesciunt.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <EventModal />
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
