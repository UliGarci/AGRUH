-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-11-2022 a las 19:17:10
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `hotel`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `buystore`
--

CREATE TABLE `buystore` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idstore` int(11) NOT NULL,
  `buytime` varchar(5) NOT NULL,
  `total` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `buystore`
--

INSERT INTO `buystore` (`id`, `iduser`, `idstore`, `buytime`, `total`) VALUES
(1, 3, 3, '12:16', 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `employees`
--

CREATE TABLE `employees` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `idrole` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `employees`
--

INSERT INTO `employees` (`id`, `name`, `surname`, `email`, `password`, `idrole`) VALUES
(1, 'Ulises', 'Garcia Mendez', 'ulises_garcia@hotmail.com', '12345678', 1),
(3, 'Mike', 'DSM', 'mike_dsm@hotmail.com', '12345678', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gym`
--

CREATE TABLE `gym` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `schedule` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gym`
--

INSERT INTO `gym` (`id`, `name`, `schedule`) VALUES
(1, 'Maquinas', '8:00 a.m - 11:00 a.m'),
(2, 'Spinning', '10:20 a.m - 11:20 a.m'),
(3, 'Zumba', '11:30 a.m - 12:30 a.m');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gymreservations`
--

CREATE TABLE `gymreservations` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idgym` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `gymreservations`
--

INSERT INTO `gymreservations` (`id`, `iduser`, `idgym`) VALUES
(1, 3, 3),
(2, 3, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `memberships`
--

CREATE TABLE `memberships` (
  `id` int(11) NOT NULL,
  `membership` varchar(50) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `memberships`
--

INSERT INTO `memberships` (`id`, `membership`, `price`) VALUES
(1, 'Basica', 160),
(2, 'Premium', 200),
(3, 'Rapid-in', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(500) NOT NULL,
  `price` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `menu`
--

INSERT INTO `menu` (`id`, `name`, `description`, `image`, `price`) VALUES
(2, 'Enchiladas rojas', 'chile guajillo y jitomate', 'https://cocinamia.com.mx/wp-content/uploads/2020/02/a-45-2-1100x500.png', 50.99),
(3, 'Enchiladas verdes', 'chile serrano y tomate', 'https://cocinamia.com.mx/wp-content/uploads/2020/02/b-07-1100x500.png', 49.99);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reservations`
--

CREATE TABLE `reservations` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `datein` date NOT NULL,
  `dateout` date NOT NULL,
  `hourin` varchar(5) NOT NULL,
  `hourout` varchar(5) NOT NULL,
  `numkid` int(11) NOT NULL,
  `numadult` int(11) NOT NULL,
  `idroom` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reservations`
--

INSERT INTO `reservations` (`id`, `iduser`, `datein`, `dateout`, `hourin`, `hourout`, `numkid`, `numadult`, `idroom`) VALUES
(1, 2, '2022-11-22', '2022-11-30', '17:00', '17:00', 0, 1, 4),
(2, 3, '2022-11-23', '2022-11-28', '17:00', '17:00', 0, 2, 2),
(10, 4, '2022-11-25', '2022-11-30', '17:00', '17:00', 0, 1, 4);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `id` int(11) NOT NULL,
  `role` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`id`, `role`) VALUES
(1, 'Administrador'),
(2, 'Huesped');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rooms`
--

CREATE TABLE `rooms` (
  `id` int(11) NOT NULL,
  `room` varchar(50) NOT NULL,
  `price` double NOT NULL,
  `description` varchar(200) NOT NULL,
  `image` varchar(500) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `rooms`
--

INSERT INTO `rooms` (`id`, `room`, `price`, `description`, `image`,`quantity`) VALUES
(1, 'Sencilla', 380.32, '1 cama, 1 television', 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2020_stanza_hotel_habitacion_sencilla_01.jpg',5),
(2, 'junior-suite', 430.38, '2 camas, 1 television, vista al mar', 'http://www.hoteldelacasona.com/wp-content/uploads/2018/10/hab2-5.jpg',3),
(3, 'Suite', 580.42, '2 camas, 1 television, sala de estar, balcon', 'https://www.hotsson.com/HSAdmin/habitacion/images/recortes/Cc_IMGhabitacion_SuitePresidencial_5597.jpg',5),
(4, 'Presidencial', 864.99, '2 camas, aire acondicionado, 2 televisiones, terraza', 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2018_stanza_051-1.jpg',3),
(5, 'Fast', 500, '1 camas, aire acondicionado, 1 television', 'https://www.stanzahotel.com/wp-content/uploads/2020/07/2018_stanza_051-1.jpg',8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sessions`
--

CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) UNSIGNED NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sessions`
--

INSERT INTO `sessions` (`session_id`, `expires`, `data`) VALUES
('67ywminZbeTBOA45fiOS94fzH2BoI6e7', 1669061276, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}'),
('qJ0WOABxF0Sr9zIbkGgh33Snuq6AOMr6', 1669061175, '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"httpOnly\":true,\"path\":\"/\"},\"flash\":{}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spa`
--

CREATE TABLE `spa` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `schedule` varchar(50) NOT NULL,
  `image` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `spa`
--

INSERT INTO `spa` (`id`, `name`, `schedule`, `image`) VALUES
(1, 'Masajes', '8:00 a.m - 7:00 p.m', 'https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2019/10/hela-spa-disfruta-un-masaje-y-consientete-ti-misma.jpg'),
(2, 'Faciales', '8:00 a.m - 11:00 a.m', 'https://www.mayencenter.com.mx/s/cc_images/cache_18866819.png?t=1539277275'),
(3, 'Depilacion', '10:00 a.m - 10:00 p.m', 'https://static.wixstatic.com/media/985008_058b107ca57347508805dd277fc9b53b~mv2.jpg/v1/fill/w_640,h_556,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/985008_058b107ca57347508805dd277fc9b53b~mv2.jpg'),
(4, 'Masaje reductivo', '11:00 a.m - 5:00 p.m', 'https://tecnocientifica.com.mx/uploads/9/1/2/5/91259726/tratamiento-reductor-allure-beauty-center-y-spa_orig.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `spareservations`
--

CREATE TABLE `spareservations` (
  `id` int(11) NOT NULL,
  `iduser` int(11) NOT NULL,
  `idspa` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `spareservations`
--

INSERT INTO `spareservations` (`id`, `iduser`, `idspa`) VALUES
(1, 2, 2),
(3, 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `store`
--

CREATE TABLE `store` (
  `id` int(11) NOT NULL,
  `souvenir` varchar(50) NOT NULL,
  `image` varchar(500) NOT NULL,
  `price` double NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `store`
--

INSERT INTO `store` (`id`, `souvenir`, `image`, `price`, `quantity`) VALUES
(1, 'Toalla - azul', 'https://m.media-amazon.com/images/I/910hF2lYvjL._AC_SX466_.jpg', 32.15, 50),
(2, 'Toalla - gris', 'https://www.costco.com.mx/medias/sys_master/products/h28/h1c/11136833978398.jpg', 31.32, 50),
(3, 'Llavero - avion', 'https://img.ltwebstatic.com/images3_pi/2021/06/10/1623294096dea6164a134161751523f3ca1bd0f99a.webp', 12, 25);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `surname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `card` varchar(16) NOT NULL,
  `idmembership` int(11) NOT NULL,
  `idrole` int(11) NOT NULL,
  `spent` double NOT NULL,
  `status` tiny NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `surname`, `email`, `password`, `phone`, `card`, `idmembership`, `idrole`, `spent`,`status`) VALUES
(2, 'Andres', 'Mena Padilla', 'andres_mena@hotmail.com', 'andres123', '7773271160', '4741751754442929', 1, 2, 160,1),
(3, 'Sebastian', 'Quintero Martinez', 'sebastian_quintero@hotmail.com', 'sebastian123', '7771234567', '4741751754444949', 2, 2, 212,1),
(4, 'Josue', 'Vidal Peralta', 'josue_vidal@hotmail.com', 'josue123', '', '1234567890123456', 2, 2, 1064.99,0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `buystore`
--
ALTER TABLE `buystore`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iduser_buystore_users` (`iduser`),
  ADD KEY `fk_iddstore_buystore_store` (`idstore`);

--
-- Indices de la tabla `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idrole_employees_roles` (`idrole`);

--
-- Indices de la tabla `gym`
--
ALTER TABLE `gym`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `gymreservations`
--
ALTER TABLE `gymreservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iduser_gymreservations_users` (`iduser`),
  ADD KEY `fk_idgym_gymreservations_gym` (`idgym`);

--
-- Indices de la tabla `memberships`
--
ALTER TABLE `memberships`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iduser_reservations_users` (`iduser`),
  ADD KEY `fk_idroom_reservations_rooms` (`idroom`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`session_id`);

--
-- Indices de la tabla `spa`
--
ALTER TABLE `spa`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `spareservations`
--
ALTER TABLE `spareservations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_iduser_spareservations_users` (`iduser`),
  ADD KEY `fk_idspa_spareservations_spa` (`idspa`);

--
-- Indices de la tabla `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_idmembership_memberships` (`idmembership`),
  ADD KEY `fk_idrole_users_roles` (`idrole`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `buystore`
--
ALTER TABLE `buystore`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `employees`
--
ALTER TABLE `employees`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `gym`
--
ALTER TABLE `gym`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `gymreservations`
--
ALTER TABLE `gymreservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `memberships`
--
ALTER TABLE `memberships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `reservations`
--
ALTER TABLE `reservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `spa`
--
ALTER TABLE `spa`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `spareservations`
--
ALTER TABLE `spareservations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `store`
--
ALTER TABLE `store`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `buystore`
--
ALTER TABLE `buystore`
  ADD CONSTRAINT `fk_iddstore_buystore_store` FOREIGN KEY (`idstore`) REFERENCES `store` (`id`),
  ADD CONSTRAINT `fk_iduser_buystore_users` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `employees`
--
ALTER TABLE `employees`
  ADD CONSTRAINT `fk_idrole_employees_roles` FOREIGN KEY (`idrole`) REFERENCES `roles` (`id`);

--
-- Filtros para la tabla `gymreservations`
--
ALTER TABLE `gymreservations`
  ADD CONSTRAINT `fk_idgym_gymreservations_gym` FOREIGN KEY (`idgym`) REFERENCES `gym` (`id`),
  ADD CONSTRAINT `fk_iduser_gymreservations_users` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `fk_idroom_reservations_rooms` FOREIGN KEY (`idroom`) REFERENCES `rooms` (`id`),
  ADD CONSTRAINT `fk_iduser_reservations_users` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `spareservations`
--
ALTER TABLE `spareservations`
  ADD CONSTRAINT `fk_idspa_spareservations_spa` FOREIGN KEY (`idspa`) REFERENCES `spa` (`id`),
  ADD CONSTRAINT `fk_iduser_spareservations_users` FOREIGN KEY (`iduser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_idmembership_memberships` FOREIGN KEY (`idmembership`) REFERENCES `memberships` (`id`),
  ADD CONSTRAINT `fk_idrole_users_roles` FOREIGN KEY (`idrole`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
