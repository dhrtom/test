FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["BlazorApp1/Server/BlazorApp1.Server.csproj", "BlazorApp1/Server/"]
COPY ["BlazorApp1/Client/BlazorApp1.Client.csproj", "BlazorApp1/Client/"]
COPY ["BlazorApp1/Shared/BlazorApp1.Shared.csproj", "BlazorApp1/Shared/"]
RUN dotnet restore "BlazorApp1/Server/BlazorApp1.Server.csproj"
COPY . .
WORKDIR "/src/BlazorApp1/Server"
RUN apt-get update -yq && apt-get upgrade -yq && apt-get install -yq curl git nano
RUN apt-get install nodejs

RUN dotnet build "BlazorApp1.Server.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BlazorApp1.Server.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BlazorApp1.Server.dll"]