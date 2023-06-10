/*
============================================
; Title: team.js
; Author: John Davidson
; Date: 06/10/2023
; Description: Creating a class to be exported to a team-manager.js file. 
;============================================
*/

"use strict";

// Creates a Team class with three properties.
class Team {
    constructor (name, mascot, playerCount) {
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

// Exports the Team class.
module.exports = Team