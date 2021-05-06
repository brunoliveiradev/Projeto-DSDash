package com.brunooliveira.dsvendas.repositories;

import com.brunooliveira.dsvendas.dto.MissionSuccessDTO;
import com.brunooliveira.dsvendas.dto.MissionSumDTO;
import com.brunooliveira.dsvendas.entities.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface MissionRepository extends JpaRepository <Mission, Long> {

    @Query("SELECT new com.brunooliveira.dsvendas.dto.MissionSumDTO(obj.jedi, SUM(obj.amount)) " +
            " FROM Mission AS obj GROUP BY obj.jedi")
    List<MissionSumDTO> amountGroupedByJedi();

    @Query("SELECT new com.brunooliveira.dsvendas.dto.MissionSuccessDTO(obj.jedi, " +
            "SUM(obj.visited), SUM(obj.deals)) " +
            " FROM Mission AS obj GROUP BY obj.jedi")
    List<MissionSuccessDTO> successGroupedByJedi();
}
