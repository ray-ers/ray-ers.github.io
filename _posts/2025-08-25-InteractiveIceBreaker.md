---
layout: post
title: Icebreaker Activity
category: en
description: None.
date: 2025-08-28 19:30:00 +0700
tags: [scholarship, hoc-bong, du-hoc, taiwan]
published: true
---

<!-- 1. Add Dependencies -->
<script src="https://cdn.tailwindcss.com"></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
<!-- 2. Add Styles -->
<style>
body {
            font-family: 'Inter', sans-serif;
        }
        .card {
            background-color: white;
            border-radius: 0.75rem;
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
            transition: all 0.3s ease-in-out;
        }
        .btn-round.active {
            background-color: #10B981; /* Emerald 500 */
            color: white;
            font-weight: 600;
        }
    }
</style>

<!-- 3. Add the HTML content -->
 <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-5xl">
        
        <!-- Header -->
        <header class="text-center mb-8">
            <h1 class="text-3xl sm:text-4xl font-bold text-emerald-600">Ecosystem Services Icebreaker</h1>
            <p class="mt-2 text-lg text-gray-600">Find your schedule or view table groups for each rotation.</p>
        </header>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Participant View -->
            <div class="card p-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-700">My Schedule</h2>
                <div class="flex items-center space-x-4">
                    <label for="participant-select" class="text-md font-medium text-gray-600">Select your number:</label>
                    <select id="participant-select" class="block w-full max-w-[100px] p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500">
                        <!-- Options will be populated by JS -->
                    </select>
                </div>
                <div id="participant-schedule" class="mt-6 space-y-3">
                    <!-- Schedule will be rendered here -->
                </div>
            </div>

            <!-- Organizer View -->
            <div class="card p-6">
                <h2 class="text-2xl font-semibold mb-4 text-gray-700">Organizer View</h2>
                
                <!-- Table Selection -->
                <div class="mb-4">
                    <label for="staff-select" class="block text-md font-medium text-gray-600 mb-2">Select a table:</label>
                    <select id="staff-select" class="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-emerald-500 focus:border-emerald-500">
                        <!-- Options will be populated by JS -->
                    </select>
                </div>

                <!-- Round Selection -->
                <div class="mb-4">
                    <label class="block text-md font-medium text-gray-600 mb-2">Select a round:</label>
                    <div id="round-selector" class="flex space-x-2">
                        <button class="btn-round flex-1 py-2 px-4 border border-gray-300 rounded-md transition active" data-round="1">Round 1</button>
                        <button class="btn-round flex-1 py-2 px-4 border border-gray-300 rounded-md transition" data-round="2">Round 2</button>
                        <button class="btn-round flex-1 py-2 px-4 border border-gray-300 rounded-md transition" data-round="3">Round 3</button>
                        <button class="btn-round flex-1 py-2 px-4 border border-gray-300 rounded-md transition" data-round="4">Round 4</button>
                    </div>
                </div>
                
                <!-- Group Display -->
                <div id="organizer-view-content">
                    <!-- Group info will be rendered here -->
                </div>
            </div>

        </div>
    </div>
<!-- 4. Add the JavaScript -->
    <script>
        // --- DATA ---
        const staffNames = ["Joao", "Kien", "Vince", "Max", "Carlotta", "Luiz", "Farbio"];
        
        const tableThemes = {
            "Joao": { title: "Table theme", details: "Table details" },
            "Kien": { title: "Table theme", details: "Table details" },
            "Vince": { title: "Table theme", details: "Table details" },
            "Max": { title: "Table theme", details: "Table details" },
            "Carlotta": { title: "Table theme", details: "Table details" },
            "Luiz": { title: "Table theme", details: "Table details" },
            "Farbio": { title: "Table theme", details: "Table details" }
        };

        const schedule = [
            { id: 1, rounds: ["Joao", "Kien", "Vince", "Max"] },
            { id: 2, rounds: ["Kien", "Vince", "Max", "Carlotta"] },
            { id: 3, rounds: ["Vince", "Max", "Carlotta", "Luiz"] },
            { id: 4, rounds: ["Max", "Carlotta", "Luiz", "Farbio"] },
            { id: 5, rounds: ["Carlotta", "Luiz", "Farbio", "Joao"] },
            { id: 6, rounds: ["Luiz", "Farbio", "Joao", "Kien"] },
            { id: 7, rounds: ["Farbio", "Joao", "Kien", "Vince"] },
            { id: 8, rounds: ["Kien", "Max", "Luiz", "Joao"] },
            { id: 9, rounds: ["Vince", "Carlotta", "Farbio", "Kien"] },
            { id: 10, rounds: ["Max", "Luiz", "Joao", "Vince"] },
            { id: 11, rounds: ["Carlotta", "Farbio", "Kien", "Max"] },
            { id: 12, rounds: ["Luiz", "Joao", "Vince", "Carlotta"] },
            { id: 13, rounds: ["Farbio", "Kien", "Max", "Luiz"] },
            { id: 14, rounds: ["Joao", "Vince", "Carlotta", "Farbio"] },
            { id: 15, rounds: ["Vince", "Luiz", "Kien", "Carlotta"] },
            { id: 16, rounds: ["Max", "Farbio", "Vince", "Luiz"] },
            { id: 17, rounds: ["Carlotta", "Joao", "Max", "Farbio"] },
            { id: 18, rounds: ["Luiz", "Kien", "Carlotta", "Joao"] },
            { id: 19, rounds: ["Farbio", "Vince", "Luiz", "Kien"] },
            { id: 20, rounds: ["Joao", "Max", "Farbio", "Vince"] },
            { id: 21, rounds: ["Kien", "Carlotta", "Joao", "Max"] },
            { id: 22, rounds: ["Max", "Joao", "Carlotta", "Kien"] },
            { id: 23, rounds: ["Carlotta", "Kien", "Luiz", "Vince"] },
            { id: 24, rounds: ["Luiz", "Vince", "Farbio", "Max"] },
            { id: 25, rounds: ["Farbio", "Max", "Joao", "Carlotta"] },
            { id: 26, rounds: ["Joao", "Carlotta", "Kien", "Luiz"] },
            { id: 27, rounds: ["Kien", "Luiz", "Vince", "Farbio"] },
            { id: 28, rounds: ["Vince", "Farbio", "Max", "Joao"] },
            { id: 29, rounds: ["Carlotta", "Vince", "Joao", "Luiz"] },
            { id: 30, rounds: ["Luiz", "Max", "Kien", "Farbio"] },
            { id: 31, rounds: ["Farbio", "Carlotta", "Vince", "Joao"] },
            { id: 32, rounds: ["Joao", "Luiz", "Max", "Kien"] },
            { id: 33, rounds: ["Kien", "Farbio", "Carlotta", "Vince"] }
        ];

        // --- DOM ELEMENTS ---
        const participantSelect = document.getElementById('participant-select');
        const participantScheduleDiv = document.getElementById('participant-schedule');
        const staffSelect = document.getElementById('staff-select');
        const roundSelector = document.getElementById('round-selector');
        const organizerViewContent = document.getElementById('organizer-view-content');

        // --- STATE ---
        let selectedParticipantId = 1;
        let selectedStaff = staffNames[0];
        let selectedRound = 1;

        // --- FUNCTIONS ---

        /**
         * Populates the dropdown menus on page load.
         */
        function populateDropdowns() {
            // Participants (1 to 33)
            for (let i = 1; i <= 33; i++) {
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                participantSelect.appendChild(option);
            }

            // Staff members
            staffNames.forEach(name => {
                const option = document.createElement('option');
                option.value = name;
                option.textContent = name;
                staffSelect.appendChild(option);
            });
        }

        /**
         * Renders the schedule for the selected participant.
         */
        function renderParticipantSchedule() {
            const participantData = schedule.find(p => p.id === selectedParticipantId);
            if (!participantData) {
                participantScheduleDiv.innerHTML = `<p class="text-red-500">Participant not found.</p>`;
                return;
            }

            let html = '';
            participantData.rounds.forEach((staff, index) => {
                const roundNum = index + 1;
                const tableInfo = tableThemes[staff];
                html += `
                    <div class="p-4 border rounded-lg bg-gray-50">
                        <p class="font-semibold text-emerald-700">Round ${roundNum}</p>
                        <p class="text-lg">Go to <span class="font-bold">${staff}'s</span> table</p>
                        <p class="text-sm text-gray-500">Theme: ${tableInfo.title}</p>
                    </div>
                `;
            });
            participantScheduleDiv.innerHTML = html;
        }

        /**
         * Renders the group list for the selected table and round.
         */
        function renderOrganizerView() {
            const tableInfo = tableThemes[selectedStaff];
            const roundIndex = selectedRound - 1;

            // Find all participants at this table for this round
            const participantsInGroup = schedule
                .filter(p => p.rounds[roundIndex] === selectedStaff)
                .map(p => p.id);
            
            let html = `
                <div class="p-4 border rounded-lg bg-emerald-50">
                    <h3 class="text-xl font-semibold text-emerald-800">${tableInfo.title}</h3>
                    <p class="text-md text-gray-600 mt-1">${tableInfo.details}</p>
                </div>
                <div class="mt-4">
                    <h4 class="font-semibold text-gray-700">Participants (${participantsInGroup.length}):</h4>
                    <div class="mt-2 flex flex-wrap gap-2">
                        ${participantsInGroup.length > 0 ? 
                            participantsInGroup.map(id => `<span class="bg-gray-200 text-gray-800 font-medium px-3 py-1 rounded-full">${id}</span>`).join('') :
                            '<p class="text-gray-500">No participants assigned.</p>'
                        }
                    </div>
                </div>
            `;
            organizerViewContent.innerHTML = html;
        }

        // --- EVENT LISTENERS ---

        participantSelect.addEventListener('change', (e) => {
            selectedParticipantId = parseInt(e.target.value, 10);
            renderParticipantSchedule();
        });

        staffSelect.addEventListener('change', (e) => {
            selectedStaff = e.target.value;
            renderOrganizerView();
        });

        roundSelector.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') {
                selectedRound = parseInt(e.target.dataset.round, 10);
                // Update active button style
                roundSelector.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
                e.target.classList.add('active');
                renderOrganizerView();
            }
        });

        // --- INITIALIZATION ---
        function init() {
            populateDropdowns();
            renderParticipantSchedule();
            renderOrganizerView();
        }

        init();

    </script>
