# Architecture

```mermaid
flowchart TD
    Client[React Frontend] --> API[Express API]
    API --> SQLite[(SQLite DB)]
    
    subgraph Backend
        API --> Router[Task Router]
        Router --> Controller[Task Controller]
        Controller --> Service[Task Service]
        Service --> Repository[Task Repository]
    end