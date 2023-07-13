-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema diary
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema diary
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `diary` DEFAULT CHARACTER SET utf8 ;
USE `diary` ;

-- -----------------------------------------------------
-- Table `diary`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `diary`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `diary`.`notes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `diary`.`notes` (
  `note_id` INT NOT NULL AUTO_INCREMENT,
  `note` LONGTEXT NULL,
  `title` VARCHAR(250) NULL,
  `user_id_fk` INT NULL,
  PRIMARY KEY (`note_id`),
  INDEX `user_id_fk_idx` (`user_id_fk` ASC) VISIBLE,
  CONSTRAINT `user_id_fk`
    FOREIGN KEY (`user_id_fk`)
    REFERENCES `diary`.`users` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
