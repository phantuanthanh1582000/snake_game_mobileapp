import { Fragment } from "react";
import { Coordinate } from "../types/types";
import { StyleSheet, View } from "react-native";
import { Colors } from "../styles/colors";

interface SnakeProps {
    snake: Coordinate[];
}

export default function Snake ({snake}: SnakeProps): JSX.Element{
    return(
        <Fragment>
            {snake.map((segment: Coordinate, index: number)=>{
                const segmentSyle={
                    left: segment.x * 10,
                    top: segment.y * 10
                }
                return <View key={index} style={[styles.snake, segmentSyle]}/>
            })}
        </Fragment>
    )
}

const styles = StyleSheet.create({
    snake:{
        width: 15,
        height: 15, 
        backgroundColor: Colors.primary,
        position: 'absolute',
        borderRadius: 7
    }
})