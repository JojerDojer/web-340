/*
============================================
; Title: team-manager.js
; Author: John Davidson
; Date: 06/10/2023
; Description: The JavaScript code used for importing/exporting modules.
;============================================
*/

"use strict";

// Imports the Team module from the team.js file.
const Team = require('./team.js');

// An Array that contains 5 team objects.
const teams = [
    new Team('Dallas Cowboys', 'Rowdy', 53 ),
    new Team('Oakland Raiders', 'Raider Rusher', 53 ),
    new Team('Miami Dolphins', 'T.D.', 53),
    new Team('San Francisco 49ers', 'Sourdough Sam', 53),
    new Team('Buffalo Bills', 'Billy Buffalo', 53 )
];

// A function that returns the teams array.
function getTeams() {
    return teams;
}

// A function that looks for a team in the teams array by name.
function getTeam(name) {
    for (let team of teams) {
        if (team.name === name) {
            return team
        }
    }   
}

// A function that generates a formatted string of team name, mascot, and player count.
function displayTeam(team) {
    return `Name: ${team.name}\nMascot: ${team.mascot}\nPlayer Count: ${team.playerCount}`;
}

// Exports the getTeams, getTeam, and displayTeam functions.
module.exports = { getTeams, getTeam, displayTeam };