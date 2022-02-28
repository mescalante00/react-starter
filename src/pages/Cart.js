import React from "react";
import {Collection} from "usetheform";
import {CartItem} from "./CartItem";
import { MainMenu } from '../common/MainMenu';
import { Container, Grid, Typography } from '@material-ui/core';

export function Cart({items, onRemoveItem}) {
    return (
        <>
            <Container>
                <Grid item xs={12}>
                    <MainMenu />
                </Grid>
            </Container>

            <Collection object name="cart">
                <Collection array name="items">
                    {
                    items.map(item => (
                        <CartItem {...item}
                            onRemoveItem={onRemoveItem}
                            key={
                                item.id
                            }/>
                    ))
                } </Collection>
            </Collection>
        </>

    );
}
