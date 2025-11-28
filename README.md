# 🕹️ The Beacon

[Tweet](https://x.com/the_beacon_hq)

---

## 🌟 Overview  

**The Beacon** is a platform for **Hyperlocal Live Games** like _[Borderland](https://github.com/ianherdegen/Beacon-Borderland)_ — interactive, real-world gaming experiences where your city, neighborhood, or even your favorite hangout becomes the arena.  

We’re redefining what it means to “go out and play.” Instead of screens separating players, **The Beacon** connects people face-to-face through challenges, events, and real-time adventures that blend **digital gameplay with physical spaces.**

<img width="1201" height="759" alt="Beacon" src="https://github.com/user-attachments/assets/bcf27ff3-4c4c-46d2-b9f2-0569c4d80102" />

---

## 🎯 What is "Hyperlocal Live Gaming"?  

**Hyperlocal Live Gaming** means games that:  

- 🌍 Take place in **real locations** — parks, cafés, rooftops, and public squares.  
- ⚡ Happen **live**, syncing players and events in real time.  
- 👥 Are **community-driven**, connecting players nearby through shared experiences.  

Think of it as the intersection between **gaming, events, and urban exploration** — where the **real world is your arena.**

---

## 🚀 The Mission  

- To transform everyday places into playgrounds.  
- To bring back human connection through play.  
- To make gaming local, live, and alive.  

## Getting Started

First, install the dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open your locally hosted environment with your browser to see the result.

## Deployment

This project is configured for deployment on Vercel.

## Build

To create a production build:

```bash
yarn build
```

## API

The Beacon provides a simple API endpoint to get information about all games:

### Games Endpoint

**GET** `/api/games/`

Returns a JSON response with all games, including their titles and statuses.

**Example Response:**
```json
{
  "success": true,
  "data": [
    {
      "title": "BORDERLAND",
      "status": "Open"
    },
    {
      "title": "SURVIVOR",
      "status": "LOCKED"
    },
    {
      "title": "SQUID GAME",
      "status": "LOCKED"
    },
    {
      "title": "AMAZING RACE",
      "status": "LOCKED"
    }
  ]
}
```

**Usage:**
```bash
curl http://localhost:3000/api/games/
```

This endpoint can be used by external applications to discover all available games and their current statuses.
