/*
============================================
; Title: index.js
; Author: John Davidson
; Date: 06/10/2023
; Description: The JavaScript code for WEB 340 - assignment 3.2.
;============================================
*/

"use strict";

// Imports the TeamManager module from the team-manager.js file.
const TeamManager = require('./team-manager');

// Retrieves the array of Team objects from the TeamManger module.
const teams = TeamManager.getTeams();


// Retrieves a single team object using the getTeam(name) function.
const cowboys = TeamManager.getTeam('Dallas Cowboys');
const dolphins = TeamManager.getTeam('Miami Dolphins');

// Displays all the teams in the array.
console.log('-- DISPLAYING TEAMS --');
for (let team of teams) {
    console.log(TeamManager.displayTeam(team));
}

// Creates spacing between the displaying of all teams and a single team.
console.log('\n')

// Displays a single team object.
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(cowboys))

// Creates spacing between the displaying of all teams and a single team.
console.log('\n')

// Displays a single team object.
console.log('-- DISPLAYING A SINGLE TEAM --');
console.log(TeamManager.displayTeam(dolphins));