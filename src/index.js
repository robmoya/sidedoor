import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Button from './components/button/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class App extends React.Component {

    state = {
        counter: 1,
        message: null
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
            addingMore: !this.state.addingMore
        }, () => this.verify());
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1,
            removeMore: !this.state.removeMore
        }, () => this.verify());
    };

    verify = () => {
        let number = this.state.counter;

        if (number % 5 === 0 && number % 3 === 0) {
            this.setState({ message: 'FizzBuzz' });
        }
        else if (number % 5 === 0) {
            this.setState({ message: 'Buzz' });
        }
        else if (number % 3 === 0) {
            this.setState({ message: 'Frizz' });
        }
        else {
            this.setState({ message: null });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="root">
                    <Grid container>
                        <Grid item sm={12}>
                            <div>
                                <Card className="card">
                                    <CardContent className="card-content">
                                        <Typography gutterBottom variant="headline" component="h1">
                                            {this.state.counter}
                                        </Typography>
                                        <Typography component="p" className="p">
                                            {this.state.message}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Grid container>
                                            <Grid item sm={6}>
                                                <Button
                                                    click={() => this.increment()}
                                                    type={"add"}
                                                    isDisable={(this.state.counter === 100) ? true : false }
                                                />
                                            </Grid>
                                            <Grid item sm={6}>
                                                <Button
                                                    click={() => this.decrement()}
                                                    type={"remove"}
                                                    isDisable={(this.state.counter === 1) ? true : false }
                                                />
                                            </Grid>
                                        </Grid>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                    </Grid>
                </div>
                <style jsx global>{`
                    .root {
                        flex-grow: 1;
                        margin: 0 auto;
                        text-align: center;
                        padding-top: 20px;
                    }
                    .card {
                        height: 200px;
                        margin: 0 auto;
                        max-width: 400px;
                    }
                    .card-content {
                        height: 75px !important;
                    }
                `}</style>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));